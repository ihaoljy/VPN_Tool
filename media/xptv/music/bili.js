
const $config = argsify($config_str)
const cheerio = createCheerio()
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
const headers = {
  'User-Agent': UA,
  'Referer': 'https://www.bilibili.com/'
}

const appConfig = {
  "ver": 1,
  "name": "bilibili音乐",
  "message": "",
  "desc": "",
  "tabLibrary": {
    "name": "探索",
    "groups": [{
        "name": "推荐",
        "type": "song",
        "ui": 0,
        "showMore": false,
        "ext": {
            "gid": '1'
        }
    }, {
      "name": "VOCALOID·UTAU",
      "type": "song",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '2',
          rid: 30
      }
    }, {
      "name": "演奏",
      "type": "song",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '2',
          rid: 59
      }
    }, {
      "name": "MV",
      "type": "song",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '2',
          rid: 193
      }
    }, {
      "name": "音乐综合",
      "type": "song",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '2',
          rid: 130
      }
    }]
  },
  "tabMe": {
    "name": "我的",
    "groups": [{
      "name": "红心",
      "type": "song"
    }, {
      "name": "歌单",
      "type": "playlist"
    }]
  },
  "tabSearch": {
    "name": "搜索",
    "groups": [{
      "name": "歌曲",
      "type": "song",
      "ext": {
        "type": "song"
      }
    }, {
      "name": "歌单",
      "type": "playlist",
      "ext": {
        "type": "playlist"
      }
    }]
  }
}

function dictToURI(dict) {
  var str = [];
  for(var p in dict){
     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
  }
  return str.join("&");
}

async function getConfig() {
  return jsonify(appConfig)
}

async function getSongs(ext) {
  const { page, gid, id, from, text } = argsify(ext)
  let songs = []

  if (gid == '1') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    const { data } = await $fetch.get('https://www.bilibili.com/v/music/?spm_id_from=333.1007.0.0', {
      headers
    })
    // $print(`***data: ${data}`)
    let json = data.match(/__INITIAL_DATA__=(\[.*?\])<\/script>/)[1]
    $print(`***json: ${json}`)
    argsify(json)[0]?.response["5010"]?.forEach( each => {
      let archive = each.archive
      songs.push({
        id: `${archive.aid}`,
        name: archive.title,
        cover: archive.pic,
        duration: parseInt(archive.duration),
        artist: {
          id: `${archive.owner.mid}`,
          name: archive.owner.name,
          cover: archive.owner.face
        },
        ext: {
          aid: archive.aid,
          cid: archive.cid,
          bvid: archive.bvid
        }
      })
    })
  }

  if (gid == '2') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    const { rid } = argsify(ext)
    const { data } = await $fetch.get(`https://api.bilibili.com/x/web-interface/dynamic/region?ps=14&pn=1&rid=${rid}`, {
      headers
    })
    $print(`***json: ${data}`)
    argsify(data)?.data?.archives?.forEach( each => {
      songs.push({
        id: `${each.aid}`,
        name: each.title,
        cover: each.pic,
        duration: each.duration,
        artist: {
          id: `${each.owner.mid}`,
          name: each.owner.name,
          cover: each.owner.face,
        },
        ext: {
          aid: each.aid,
          cid: each.cid,
          bvid: each.bvid
        }
      })
    })
  }

  // search
  if (gid === '99') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    const { aid, cid, bvid } = argsify(ext)
    let params = {
      aid: aid
    }
    const { data } = await $fetch.get(`https://api.bilibili.com/x/web-interface/view/detail?` + dictToURI(params), {
      headers
    })
    let view = argsify(data).data?.View
    view?.ugc_season?.sections[0]?.episodes?.forEach( each => {
      songs.push({
        id: `${each.cid}`,
        name: each.title,
        cover: each.arc.pic,
        duration: each.arc.duration,
        artist: {
          id: `${view.owner.mid}`,
          name: view.owner.name,
          cover: view.owner.face
        },
        ext: {
          aid: each.aid,
          cid: each.cid,
          bvid: each.bvid
        }
      })
    })
    if (songs.length == 0) {
      view?.pages?.forEach( each => {
        songs.push({
          id: `${each.cid}`,
          name: each.part,
          cover: each.first_frame,
          duration: each.duration,
          artist: {
            id: `${view.owner.mid}`,
            name: view.owner.name,
            cover: view.owner.face
          },
          ext: {
            aid: view.aid,
            cid: each.cid,
            bvid: view.bvid
          }
        })
      })
    }
  }
  
  return jsonify({
    list: songs,
  })
}

async function getArtists(ext) {
  const { page, gid, from } = argsify(ext)
  let artists = []
  
  if (page > 1) {
    return jsonify({list: artists})
  }

  if (gid === '8') {
    const { data } = await $fetch.get(`https://y.qq.com/n/ryqq/singer_list`, {
      headers
    })
    const $ = cheerio.load(data)
    $('li.singer_list__item').each((index, each) => {
      const name = $(each).find('a').attr('title')
      const id = $(each).find('a').attr('href').slice(15)
      const cover = `https://y.qq.com/music/photo_new/T001R500x500M000${id}.jpg`
      artists.push({
        id,
        name,
        cover,
        groups: [{
          name: '热门歌曲',
          type: 'song',
          ext: {
            gid: gid,
            id: id,
            text: name,
          }
        }]
      })
    })
  }
  
  return jsonify({
    list: artists,
  })
}

async function getPlaylists(ext) {
  const { page, from } = argsify(ext)
  if (page > 1) {
    return jsonify({
      list: [],
    })
  }
  
  let cards = []

  return jsonify({
    list: cards
  })
}

async function getAlbums(ext) {
  const { page, from } = argsify(ext)
  if (page > 1) {
    return jsonify({
      list: [],
    })
  }

  let cards = []

  return jsonify({
    list: cards
  })
}

async function search(ext) {
  const { text, page, type } = argsify(ext)

  if (page > 1) {
    return jsonify({})
  }

  if (!text.startsWith('BV')) {
    return jsonify({})
  }

  if (type == 'song') {
    let songs = []
    let params = {
      bvid: text
    }
    const { data } = await $fetch.get(`https://api.bilibili.com/x/web-interface/view/detail?` + dictToURI(params), {
      headers
    })

    let view = argsify(data).data?.View
    if (view != undefined) {
      songs.push({
        id: `${view.aid}`,
        name: view.title,
        cover: view.pic,
        duration: view.duration,
        artist: {
          id: `${view.owner.mid}`,
          name: view.owner.name,
          cover: view.owner.face
        },
        ext: {
          aid: view.aid,
          cid: view.cid,
          bvid: view.bvid
        }
      })
    }

    return jsonify({
      list: songs,
    })
  }

  if (type == 'playlist') {
    let cards = []
    let params = {
      bvid: text
    }
    const { data } = await $fetch.get(`https://api.bilibili.com/x/web-interface/view/detail?` + dictToURI(params), {
      headers
    })

    $print(`***data: ${data}`)

    let view = argsify(data).data?.View
    if (view != undefined) {
      let ugc = view?.ugc_season
      if (ugc != undefined) {
        cards.push({
          id: `${view.aid}`,
          name: ugc.title,
          cover: ugc.cover,
          artist: {
            id: `${view.owner.mid}`,
            name: view.owner.name,
            cover: view.owner.face
          },
          ext: {
            gid: '99',
            aid: view.aid,
            cid: view.cid,
            bvid: view.bvid
          }
        })
      } else {
        cards.push({
          id: `${view.aid}`,
          name: view.title,
          cover: view.pic,
          artist: {
            id: `${view.owner.mid}`,
            name: view.owner.name,
            cover: view.owner.face
          },
          ext: {
            gid: '99',
            aid: view.aid,
            cid: view.cid,
            bvid: view.bvid
          }
        })
      }
    }

    return jsonify({
      list: cards
    })
  }
  
  return jsonify({})
}

async function getSongInfo(ext) {
  const { aid, cid, bvid } = argsify(ext)
  let params = {
    avid: aid,
    cid: cid,
    qn: 32,
    fnval: 1,
    type: '',
    fnver: 0,
    otype: 'json',
    fourk: 0
  }
  const { data } = await $fetch.get('https://api.bilibili.com/x/player/wbi/playurl?' + dictToURI(params), {
    headers
  })
  $print(`***song: ${data}`)
  let audio = argsify(data).data?.durl[0]?.url ?? ""
  return jsonify({ urls: [audio], headers: [{"User-Agent": "Bilibili/APPLE TV", "Referer": "https://www.bilibili.com/video/av${aid}"}] })
}
