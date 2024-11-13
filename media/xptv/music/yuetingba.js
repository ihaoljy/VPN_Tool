const $config = argsify($config_str)
const cheerio = createCheerio()
const CryptoJS = createCryptoJS()

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
const headers = {
    'User-Agent': UA,
}

const appConfig = {
    ver: 1,
    name: '悦听吧',
    message: '',
    desc: '',
    tabLibrary: {
        name: '探索',
        groups: [
            {
                name: '玄幻',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '1',
                },
            },
            {
                name: '歷史',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '2',
                },
            },
            {
                name: '武俠',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '3',
                },
            },
            {
                name: '都市',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '4',
                },
            },
            {
                name: '科幻',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '5',
                },
            },
            {
                name: '名著',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '6',
                },
            },
            {
                name: '女頻',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '7',
                },
            },
            {
                name: '社科',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '8',
                },
            },
            {
                name: '兒童',
                type: 'album',
                ui: 0,
                showMore: true,
                ext: {
                    id: '9',
                },
            },
        ],
    },
    tabMe: {
        name: '我的',
        groups: [
            {
                name: '红心',
                type: 'album',
            },
        ],
    },
    tabSearch: {
        name: '搜索',
        groups: [
            {
                name: '書名',
                type: 'album',
                ext: {
                    type: 'album',
                },
            },
        ],
    },
}

function dictToURI(dict) {
    var str = []
    for (var p in dict) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(dict[p]))
    }
    return str.join('&')
}

async function getConfig() {
    return jsonify(appConfig)
}

async function getSongs(ext) {
    const { page, id, img } = argsify(ext)
    let songs = []

    let url = `http://www.yuetingba.cn${id}`
    let bookid = id.match(/book\/(.*?)\/0/)[1]

    // 假的，根本沒有page，被騙了
    if (page > 1) {
        pageNum = 200 * (page - 1)
        url = url.slice(0, -1) + pageNum
    }

    const { data } = await $fetch.get(url, {
        headers,
    })
    const $ = cheerio.load(data)
    let artist = {
        id: $('.books-detail-detail .text-desc > div').eq(2).find('.text-desc-content > a').text(),
        name: $('.books-detail-detail .text-desc > div').eq(2).find('.text-desc-content > a').text(),
        cover: '',
    }

    let pagelist = $('.ting-list ul li')
    for (const e of pagelist.toArray()) {
        let pageUrl = 'http://www.yuetingba.cn' + $(e).find('a').attr('href')

        const { data: pageRes } = await $fetch.get(pageUrl, { headers })
        const _$ = cheerio.load(pageRes)

        const playlist = _$('.ting-list-content > div')
        playlist.each((_, el) => {
            const id = _$(el)
                .find('div.col-md-10 a')
                .attr('onclick')
                .match(/testFn\('(.*?)'\)/)[1]
            const name = _$(el).find('div.col-md-10 a').attr('title')

            songs.push({
                id: id,
                name: name,
                cover: img,
                duration: 1,
                artist: artist,
                ext: {
                    id: id,
                    bookid: bookid,
                },
            })
        })
    }

    return jsonify({
        list: songs,
    })
}

// async function getArtists(ext) {
//     const { page, gid, from } = argsify(ext)
//     let artists = []

//     if (page > 1) {
//         return jsonify({ list: artists })
//     }

//     if (gid === '8') {
//         const { data } = await $fetch.get(`https://y.qq.com/n/ryqq/singer_list`, {
//             headers,
//         })
//         const $ = cheerio.load(data)
//         $('li.singer_list__item').each((index, each) => {
//             const name = $(each).find('a').attr('title')
//             const id = $(each).find('a').attr('href').slice(15)
//             const cover = `https://y.qq.com/music/photo_new/T001R500x500M000${id}.jpg`
//             artists.push({
//                 id,
//                 name,
//                 cover,
//                 groups: [
//                     {
//                         name: '热门歌曲',
//                         type: 'song',
//                         ext: {
//                             gid: gid,
//                             id: id,
//                             text: name,
//                         },
//                     },
//                 ],
//             })
//         })
//     }

//     return jsonify({
//         list: artists,
//     })
// }

async function getPlaylists(ext) {
    const { page, from } = argsify(ext)
    if (page > 1) {
        return jsonify({
            list: [],
        })
    }

    let cards = []

    return jsonify({
        list: cards,
    })
}

async function getAlbums(ext) {
    const { page, id } = argsify(ext)
    let cards = []

    const url = `http://www.yuetingba.cn/book/${id}/${page}`
    const { data } = await $fetch.get(url, {
        headers,
    })
    const $ = cheerio.load(data)
    const books = $('.section-box-list-item')
    books.each((_, e) => {
        let artistName = $(e).find('.box-list-item-text-autspeaker span').eq(1).text().trim()
        let obj = {
            id: $(e).find('.box-list-item-text-title > a').attr('href'),
            name: $(e).find('.box-list-item-text-title > a').text(),
            cover: 'http://www.yuetingba.cn' + $(e).find('.img-thumbnail').attr('src'),
            artist: {
                id: artistName,
                name: artistName,
            },
            ext: {
                id: $(e).find('.box-list-item-text-title > a').attr('href'),
                img: 'http://www.yuetingba.cn' + $(e).find('.img-thumbnail').attr('src'),
            },
        }
        // $print(JSON.stringify(obj, null, 2))
        cards.push(obj)
    })

    return jsonify({
        list: cards,
    })
}

async function search(ext) {
    const { text, page, type } = argsify(ext)
    let cards = []

    let url = `http://www.yuetingba.cn/search?type=1&name=${text}`
    if (page > 1) {
        url = url + `&pageIndex=${page}`
    }

    const { data } = await $fetch.get(url, {
        headers,
    })
    const $ = cheerio.load(data)
    const books = $('.section-box-list-item')
    books.each((_, e) => {
        let artistName = $(e).find('.box-list-item-text-autspeaker span').eq(1).text().trim()
        let obj = {
            id: $(e).find('.box-list-item-text-title > a').attr('href'),
            name: $(e).find('.box-list-item-text-title > a').text(),
            cover: 'http://www.yuetingba.cn' + $(e).find('.img-thumbnail').attr('src'),
            artist: {
                id: artistName,
                name: artistName,
            },
            ext: {
                id: $(e).find('.box-list-item-text-title > a').attr('href'),
                img: 'http://www.yuetingba.cn' + $(e).find('.img-thumbnail').attr('src'),
            },
        }
        // $print(JSON.stringify(obj, null, 2))
        cards.push(obj)
    })

    return jsonify({
        list: cards,
    })
}

async function getSongInfo(ext) {
    const { id, bookid } = argsify(ext)
    let url = `http://www.yuetingba.cn/api/app/docs-listen/${id}/ting-with-ef`
    const { data } = await $fetch.get(url, {
        headers,
    })
    let ef = argsify(data).ef
    let decrypted = decrypt(ef)

    function decrypt(e) {
        e = (e + '').replace(/\n*$/g, '').replace(/\n/g, '')
        const t = CryptoJS.enc.Base64.parse(e)
        const n = CryptoJS.enc.Base64.stringify(t)

        const key = CryptoJS.enc.Base64.parse('le95G3hnFDJsBE+1/v9eYw==')
        const iv = CryptoJS.enc.Base64.parse('IvswQFEUdKYf+d1wKpYLTg==')
        return CryptoJS.AES.decrypt(n, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8)
    }

    return jsonify({ urls: ['http://117.65.18.49:50010' + decrypted], headers: [headers] })
}
