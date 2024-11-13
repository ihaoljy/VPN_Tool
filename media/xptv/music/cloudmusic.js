
const $config = argsify($config_str)
const cheerio = createCheerio()
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
const headers = {
  'User-Agent': UA,
}

const appConfig = {
  "ver": 1,
  "name": "猫耳FM",
  "message": "",
  "desc": "",
  "tabLibrary": {
    "name": "探索",
    "groups": [{
        "name": "推荐",
        "type": "song",
        "ui": 0,
        "showMore": true,
        "ext": {
            "gid": '1'
        }
    }, {
      "name": "纯音乐",
      "type": "song",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '5'
      }
    }, {
      "name": "白噪音",
      "type": "song",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '6'
      }
    }, {
        "name": "音单",
        "type": "album",
        "ui": 0,
        "showMore": true,
        "ext": {
            "gid": '2'
        }
    }, {
      "name": "播客",
      "type": "playlist",
      "ui": 1,
      "showMore": true,
      "ext": {
          "gid": '7'
      }
  }, {
        "name": "国风歌单",
        "type": "playlist",
        "ui": 1,
        "showMore": true,
        "ext": {
            "gid": '3'
        }
    }, {
      "name": "流行歌单",
      "type": "playlist",
      "ui": 1,
      "showMore": false,
      "ext": {
          "gid": '9'
      }
  }, {
      "name": "排行榜",
      "type": "playlist",
      "ui": 1,
      "showMore": true,
      "ext": {
          "gid": '4'
      }
    }, {
      "name": "创作者",
      "type": "artist",
      "ui": 0,
      "showMore": false,
      "ext": {
          "gid": '8'
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
    }, {
      "name": "专辑",
      "type": "album"
    }, {
      "name": "创作者",
      "type": "artist"
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
    }]
  }
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
    const { data } = await $fetch.get('https://www.missevan.com/sound/newhomepagedata', {
      headers
    })
    // $print(`***data: ${data}`)
    argsify(data).info.music.forEach( genre => {
      genre.objects_point.forEach ( each => {
        songs.push({
          id: `${each.id}`,
          name: each.soundstr,
          cover: each.front_cover,
          duration: parseInt(each.duration / 100),
          artist: {
            id: `${each.user_id}`,
            name: each.username
          },
          ext: {
            id: each.id
          }
        })
      })
    })
  }

  if (gid == '6') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    songs = [{
      id: 'rs_1',
      name: 'Summer',
      cover: 'https://plus.unsplash.com/premium_photo-1681255760598-158449cece8d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: 0,
      artist: {
        id: 'rs',
        name: 'Rainyscope'
      },
      ext: {
        bid: 'https://ambicular.com/sounds/rain/rainbest160.mp3'
      }
    }, {
      id: 'rs_2',
      name: 'Canicule',
      cover: 'https://plus.unsplash.com/premium_photo-1688255283208-67d0076cba4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FuaWN1bGV8ZW58MHx8MHx8fDA%3D',
      duration: 0,
      artist: {
        id: 'rs',
        name: 'Rainyscope'
      },
      ext: {
        bid: 'https://ambicular.com/sounds/rain/splashing-rainfall160.mp3'
      }
    }, {
      id: 'rs_3',
      name: 'Autumn',
      cover: 'https://plus.unsplash.com/premium_photo-1668967516060-624b8a7021f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0dW1ufGVufDB8fDB8fHww',
      duration: 0,
      artist: {
        id: 'rs',
        name: 'Rainyscope'
      },
      ext: {
        bid: 'https://thesnds.b-cdn.net/sounds/hipster/birds160.mp3'
      }
    }, {
      id: 'rs_4',
      name: 'Winter',
      cover: 'https://images.unsplash.com/photo-1420585269105-d908ec316eb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fHww',
      duration: 0,
      artist: {
        id: 'rs',
        name: 'Rainyscope'
      },
      ext: {
        bid: 'https://thesnds.b-cdn.net/sounds/hipster/snow.mp3'
      }
    }, {
      id: 'rs_5',
      name: 'Spring',
      cover: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaW5nfGVufDB8fDB8fHww',
      duration: 0,
      artist: {
        id: 'rs',
        name: 'Rainyscope'
      },
      ext: {
        bid: 'https://thesnds.b-cdn.net/sounds/rain/thunder160.mp3'
      }
    }, {
      id: 'rs_6',
      name: 'Calm Waves',
      cover: 'https://plus.unsplash.com/premium_photo-1680339680481-edd39aa0a521?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F2ZXN8ZW58MHx8MHx8fDA%3D',
      duration: 0,
      artist: {
        id: 'vt',
        name: 'virtocean'
      },
      ext: {
        vid: 'https://thesnds.b-cdn.net/sounds/ocean/calm-waves.mp3'
      }
    }]
  }

  if (gid == '2') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    
    const { data } = await $fetch.get(`https://www.missevan.com/sound/soundalllist?albumid=${id}`, {
      headers
    })
    const info = argsify(data).info
    let artist = {
      id: `${info.owner.id}`,
      name: info.owner.username,
      cover: info.owner.avatar2
    }
    info.sounds.forEach( each => {
      songs.push({
        id: `${each.id}`,
        name: each.soundstr,
        cover: each.front_cover,
        duration: parseInt(each.duration / 100),
        artist: artist,
        ext: {
          url: each.soundurl
        }
      })
    })
  }

  if (gid == '5') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }

    const { data } = await $fetch.get('http://www.htqyy.com/genre/1', {
      headers
    })
    
    const $ = cheerio.load(data)

    $('#musicList > li').each((index, each) => {
      const sid = $(each).find('.title > a').attr('sid')
      const name = $(each).find('.title > a').attr('title')
      const a_id = $(each).find('.artistName > a').attr('href')
      const a_name = $(each).find('.artistName > a').attr('title')
      songs.push({
        id: sid,
        name: name,
        cover: '',
        duration: 0,
        artist: {
          id: a_id,
          name: a_name
        },
        ext: {
          cid: sid
        }
      })
    })
  }

  if (gid == '9') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_playlist_cp.fcg?newsong=1&id=${id}&format=json&inCharset=GB2312&outCharset=utf-8`
    const { data } = await $fetch.get(url, {
      headers
    })
    const info = argsify(data).data.cdlist[0]
    info.songlist.forEach((e) => {
      songs.push({
          id: e.mid,
          name: e.name,
          cover: e?.album?.mid ? `https://y.gtimg.cn/music/photo_new/T002R800x800M000${e.album.mid}.jpg` : '',
          duration: e.interval ?? 0,
          artist: {
              id: e.singer[0].mid,
              name: e.singer[0].name,
              cover: `https://y.qq.com/music/photo_new/T001R500x500M000${e.singer[0].mid}.jpg`,
          },
          ext: {
              qid: e.mid || e.songmid,
          },
      })
    })
  }

  if (gid == '3') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    const { data } = await $fetch.get(`https://www.missevan.com/sound/soundalllist?albumid=${id}`, {
      headers
    })
    const info = argsify(data).info
    let artist = {
      id: `${info.owner.id}`,
      name: info.owner.username,
      cover: info.owner.avatar2
    }
    info.sounds.forEach( each => {
      songs.push({
        id: `${each.id}`,
        name: each.soundstr,
        cover: each.front_cover,
        duration: parseInt(each.duration / 100),
        artist: artist,
        ext: {
          url: each.soundurl
        }
      })
    })
  }

  if (gid == '4') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    let _a
    const period = ext.period
    const url = `https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A${id}%2C%22offset%22%3A0%2C%22num%22%3A100%2C%22period%22%3A%22${
        (_a = period) !== null && _a !== void 0 ? _a : ''
    }%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D`
    const { data } = await $fetch.get(url, {
        headers: {
            Cookie: 'uin=',
        },
    })
    argsify(data).detail.data.songInfoList.forEach((e) => {
      songs.push({
          id: e.mid,
          name: e.name,
          cover: e?.album?.mid ? `https://y.gtimg.cn/music/photo_new/T002R800x800M000${e.album.mid}.jpg` : '',
          duration: e.interval ?? 1,
          artist: {
              id: e.singer[0].mid,
              name: e.singer[0].name,
              cover: '',
          },
          ext: {
              qid: e.mid || e.songmid,
          },
      })
    })
  }

  if (gid == '8') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }

    const { data } = await $fetch.get(`http://c.y.qq.com/soso/fcgi-bin/client_search_cp?new_json=1&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=${page}&n=20&w=${encodeURIComponent(text)}&needNewCode=0`, {
      headers
    })

    argsify(data.slice(9, -1)).data?.song?.list?.forEach( each => {
      if (text === each.singer[0]?.name) {
        songs.push({
          id: `${each.mid}`,
          name: each.name,
          cover: `https://y.gtimg.cn/music/photo_new/T002R800x800M000${each.album.mid}.jpg`,
          duration: 0,
          artist: {
            id: `${each.singer[0]?.id}`,
            name: each.singer[0]?.name || '',
          },
          ext: {
            qid: each.mid
          }
        })
      }
    })
  }

  if (gid == '7') {
    if (page > 1) {
      return jsonify({
        list: [],
      })
    }
    const { data } = await $fetch.get(id, {
      headers
    })
    const $ = cheerio.load(data, { xmlMode: true })
    const author = $('title:first').text()
    const cover = $('itunes\\:image:first').attr('href') ?? ''
    const artist = {
      id: author,
      name: author,
      cover: cover,
    }
    $('item').each((index, each) => {
      const ele = $(each)
      songs.push({
        id: ele.find('guid').text(),
        name: ele.find('title').text(),
        cover: ele.find('itunes\\:image').attr('href') ?? cover,
        duration: 0,
        artist,
        ext: {
            pid: ele.find('enclosure').attr('url') ?? ''
        },
      })
    })
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
  const { page, gid, from } = argsify(ext)
  if (page > 1) {
    return jsonify({
      list: [],
    })
  }
  
  let cards = []

  if (gid == '9') {
    const { data } = await $fetch.get('https://y.qq.com/n/ryqq/category', {
      headers
    })
    let json = data.match(/__INITIAL_DATA__ =({.*?})<\/script>/)[1]
    argsify(json).playlist.forEach( each => {
      cards.push({
        id: `${each.dissid}`,
        name: each.dissname,
        cover: each.imgurl,
        artist: {
          id: each.encrypt_uin,
          name: each.creatorname
        },
        ext: {
          gid,
          id: `${each.dissid}`,
          type: "playlist"
        }
      })
    })
  }

  // id 1 
  if (gid == '3') {
    const { data } = await $fetch.get('https://www.missevan.com/explore/tagalbum?order=0', {
      headers
    })
    argsify(data).albums.forEach( each => {
      cards.push({
        id: `${each.id}`,
        name: each.title,
        cover: each.front_cover,
        artist: {
          id: `${each.user_id}`,
          name: each.username
        },
        ext: {
          gid,
          id: each.id
        }
      })
    })
  }

  if (gid == '4') {
    const { data } = await $fetch.get(
      'https://u.y.qq.com/cgi-bin/musicu.fcg?_=1577086820633&data=%7B%22comm%22%3A%7B%22g_tk%22%3A5381%2C%22uin%22%3A123456%2C%22format%22%3A%22json%22%2C%22inCharset%22%3A%22utf-8%22%2C%22outCharset%22%3A%22utf-8%22%2C%22notice%22%3A0%2C%22platform%22%3A%22h5%22%2C%22needNewCode%22%3A1%2C%22ct%22%3A23%2C%22cv%22%3A0%7D%2C%22topList%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetAll%22%2C%22param%22%3A%7B%7D%7D%7D',
      {
          headers: {
              Cookie: 'uin=',
          },
      }
    )
    argsify(data).topList.data.group.forEach((each) => {
        each.toplist.forEach((e) => {
            if (e.title === 'MV榜') {
              return
            }
            cards.push({
                id: `${e.topId}`,
                name: e.title,
                cover: e.headPicUrl || e.frontPicUrl,
                artist: {
                  id: 'qq',
                  name: 'QQ',
                },
                ext: {
                  gid,
                  id: `${e.topId}`,
                  type: 'toplist',
                  period: e.period,
                },
            })
        })
    })
  }

  if (gid == '7') {
    const { data } = await $fetch.get('https://getpodcast.xyz/', {
      headers
    })
    
    const $ = cheerio.load(data)

    $('.pic_list > li > a').each((index, each) => {
      const url = $(each).attr('href')
      const name = $(each).find('img').attr('alt')
      const cover = $(each).find('img').attr('src')
      cards.push({
        id: url,
        name: name,
        cover: cover,
        artist: {
          id: url,
          name: name
        },
        ext: {
          gid,
          type: 'podcast',
          id: url
        }
      })

      if (from === 'index') {
        cards = cards.slice(0, 20)
      }
    })
  }

  return jsonify({
    list: cards
  })
}

async function getAlbums(ext) {
  const { page, gid, from } = argsify(ext)
  if (page > 1) {
    return jsonify({
      list: [],
    })
  }
  let cards = []

  if (gid == '2') {
    const { data } = await $fetch.get('https://www.missevan.com/explore/tagalbum?order=0', {
      headers
    })
    argsify(data).albums.forEach( each => {
      cards.push({
        id: `${each.id}`,
        name: each.title,
        cover: each.front_cover,
        artist: {
          id: `${each.user_id}`,
          name: each.username
        },
        ext: {
          gid,
          id: each.id
        }
      })
    })
  }

  return jsonify({
    list: cards
  })
}

/*
async function getPlaylistInfo(ext) {
  ext = argsify(ext)
  const { id, page, type } = ext
  if (page > 1) {
    return jsonify({})
  }

  let songs = []

  if (type === 'podcast') {
    const { data } = await $fetch.get(id, {
      headers
    })
    const $ = cheerio.load(data, { xmlMode: true })
    const author = $('title:first').text()
    const cover = $('itunes\\:image:first').attr('href') ?? ''
    const artist = {
      id: author,
      name: author,
      cover: cover,
    }
    $('item').each((index, each) => {
      const ele = $(each)
      songs.push({
        id: ele.find('guid').text(),
        name: ele.find('title').text(),
        cover: ele.find('itunes\\:image').attr('href') ?? cover,
        duration: 0,
        artist,
        ext: {
            pid: ele.find('enclosure').attr('url') ?? ''
        },
      })
    })
    
    return jsonify({
      item: {
        id: author,
        name: author,
        cover: "",
        artist,
        songs,
      },
    })
  }

  if (type === 'playlist') {
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_playlist_cp.fcg?newsong=1&id=${id}&format=json&inCharset=GB2312&outCharset=utf-8`
    const { data } = await $fetch.get(url, {
      headers
    })
    const info = argsify(data).data.cdlist[0]
    info.songlist.forEach((e) => {
      songs.push({
          id: e.mid,
          name: e.name,
          cover: e?.album?.mid ? `https://y.gtimg.cn/music/photo_new/T002R800x800M000${e.album.mid}.jpg` : '',
          duration: e.interval ?? 0,
          artist: {
              id: e.singer[0].mid,
              name: e.singer[0].name,
              cover: `https://y.qq.com/music/photo_new/T001R500x500M000${e.singer[0].mid}.jpg`,
          },
          ext: {
              qid: e.mid || e.songmid,
          },
      })
    })

    return jsonify({
        item: {
            id: `${info.dissid}`,
            name: info.dissname,
            cover: info.logo,
            artist: {
              id: `${info.uin}`,
              name: info.nickname,
              cover: info.headurl
            },
            songs,
        },
    })
  }

  if (type === 'toplist') {
    let _a
    const period = ext.period
    const url = `https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A${id}%2C%22offset%22%3A0%2C%22num%22%3A100%2C%22period%22%3A%22${
        (_a = period) !== null && _a !== void 0 ? _a : ''
    }%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D`
    const { data } = await $fetch.get(url, {
        headers: {
            Cookie: 'uin=',
        },
    })
    let artist = {
        id: 'qq',
        name: '',
        cover: '',
    }
    let info = argsify(data).detail.data.data
    argsify(data).detail.data.songInfoList.forEach((e) => {
      // $print(JSON.stringify(e, null, 2))
      songs.push({
          id: e.mid,
          name: e.name,
          cover: e?.album?.mid ? `https://y.gtimg.cn/music/photo_new/T002R800x800M000${e.album.mid}.jpg` : '',
          duration: e.interval ?? 1,
          artist: {
              id: e.singer[0].mid,
              name: e.singer[0].name,
              cover: '',
          },
          ext: {
              qid: e.mid || e.songmid,
          },
      })
    })

    return jsonify({
        item: {
            id: `${id}`,
            name: info.title,
            cover: info.headPicUrl || info.frontPicUrl,
            artist,
            songs,
        },
    })
  }
  
  const { data } = await $fetch.get(`https://www.missevan.com/sound/soundalllist?albumid=${id}`, {
    headers
  })
  const info = argsify(data).info
  let artist = {
    id: `${info.owner.id}`,
    name: info.owner.username,
    cover: info.owner.avatar2
  }
  info.sounds.forEach( each => {
    songs.push({
      id: `${each.id}`,
      name: each.soundstr,
      cover: each.front_cover,
      duration: parseInt(each.duration / 100),
      artist: artist,
      ext: {
        url: each.soundurl
      }
    })
  })
  
  return jsonify({
    item: {
      id: `${info.album.id}`,
      name: info.album.title,
      cover: info.album.front_cover,
      artist,
      songs,
      ext: {
        id: info.album.id,
      }
    }
  })
}

async function getAlbumInfo(ext) {
  const { id } = argsify(ext)
  const { data } = await $fetch.get(`https://www.missevan.com/sound/soundalllist?albumid=${id}`, {
    headers
  })
  const info = argsify(data).info
  let songs = []
  let artist = {
    id: `${info.owner.id}`,
    name: info.owner.username,
    cover: info.owner.avatar2
  }
  info.sounds.forEach( each => {
    songs.push({
      id: `${each.id}`,
      name: each.soundstr,
      cover: each.front_cover,
      duration: parseInt(each.duration / 100),
      artist: artist,
      ext: {
        url: each.soundurl
      }
    })
  })
  return jsonify({
    item: {
      id: `${info.album.id}`,
      name: info.album.title,
      cover: info.album.front_cover,
      artist,
      songs,
      ext: {
        id: info.album.id,
      }
    }
  })
}
*/

async function search(ext) {
  const { text, page, type } = argsify(ext)

  if (page > 3) {
    return jsonify({})
  }

  if (type == 'song') {
    let songs = []
    const { data } = await $fetch.get(`http://c.y.qq.com/soso/fcgi-bin/client_search_cp?new_json=1&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=${page}&n=20&w=${encodeURIComponent(text)}&needNewCode=0`, {
      headers
    })

    // $print(`***song: ${data.slice(9, -1)}`)

    argsify(data.slice(9, -1)).data?.song?.list?.forEach( each => {
      songs.push({
        id: `${each.mid}`,
        name: each.name,
        cover: `https://y.gtimg.cn/music/photo_new/T002R800x800M000${each.album.mid}.jpg`,
        duration: 0,
        artist: {
          id: `${each.singer[0]?.id}`,
          name: each.singer[0]?.name || '',
        },
        ext: {
          qid: each.mid
        }
      })
    })
    
    return jsonify({
      list: songs,
    })
  }

  /*
  if (type == 'song') {
    let songs = []
    const { data } = await $fetch.get('https://www.missevan.com/sound/newhomepagedata', {
      headers
    })

    argsify(data).info.music.forEach( genre => {
      genre.objects_point.forEach ( each => {
        songs.push({
          id: `${each.id}`,
          name: each.soundstr,
          cover: each.front_cover,
          duration: parseInt(each.duration / 100),
          artist: {
            id: `${each.user_id}`,
            name: each.username
          },
          ext: {
            id: each.id
          }
        })
      })
    })
    
    return jsonify({
      list: songs,
    })
  }

  if (type == 'playlist') {
    let cards = []
    const { data } = await $fetch.get('https://www.missevan.com/explore/tagalbum?order=0', {
      headers
    })

    argsify(data).albums.forEach( each => {
      cards.push({
        id: `${each.id}`,
        name: each.title,
        cover: each.front_cover,
        artist: {
          id: `${each.user_id}`,
          name: each.username
        },
        ext: {
          id: each.id
        }
      })
    })

    return jsonify({
      list: cards
    })
  }
  */
  
  return jsonify({})
}

async function getSongInfo(ext) {
  const { url, id, qid, cid, bid, vid, pid } = argsify(ext)
  if (url != undefined) {
    return jsonify({ urls: [url] })
  }

  if (pid != undefined) {
    return jsonify({ urls: [pid] })
  }

  if (bid != undefined) {
    return jsonify({ urls: [bid], headers: [{'referer': 'https://rainyscope.com/'}] })
  }

  if (vid != undefined) {
    return jsonify({ urls: [vid], headers: [{'referer': 'https://virtocean.com/'}] })
  }
  
  if ( id != undefined) {
    const { data } = await $fetch.get(`https://www.missevan.com/sound/getsound?soundid=${id}`, {
      headers
    })
    const soundurl = argsify(data).info.sound.soundurl
    if (soundurl != undefined) {
      return jsonify({ urls: [soundurl], headers: [{'User-Agent': UA}] })
    }
  }

  if (qid != undefined) {
    const { data } = await $fetch.get(`https://lxmusicapi.onrender.com/url/tx/${qid}/320k`, {
        headers: {
            'X-Request-Key': 'share-v2',
        },
    })
    const soundurl = argsify(data).url
    if (soundurl != undefined) {
        return jsonify({ urls: [soundurl] })
    }
  }

  if (cid != undefined) {
    const { data } = await $fetch.get(`http://www.htqyy.com/play/${cid}`, {
      headers
    })
    let fileHost = data.match(/var fileHost="(.*?)";/)[1]
    let mp3 = data.match(/var mp3="(.*?)";/)[1]
    return jsonify({ urls: [fileHost + mp3], headers: [{'referer': 'http://www.htqyy.com/'}] })
  }
  
  return jsonify({ urls: [] })
}
