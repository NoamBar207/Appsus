




export const NoteData = {
    getNotes
}




function getNotes() {
    return gNotes
}

const gNotes = [
    {
        id: 101,
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#b8d9e0",
            color:"whitesmoke"
        }

    },
    {
        id: 102,
        type: "note-img",
        isPinned: true,
        info: {
            url: 'https://www.sweety.co.il/media/catalog/product/cache/1/image/830x519/9df78eab33525d08d6e5fb8d27136e95/f/i/file_51_32.jpg',
            title: "Theres Maccabi Only In Haifa"
        },
        style: {
            backgroundColor: "#66d673",
            color:"#999494"
        }
    },
    {
        id: 103,
        type: "note-todos",
        isPinned: true,
        info: {
            title: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 },
                { txt: "Can I Get Encore", doneAt: null },
                { txt: "Do You Want More", doneAt: null },
                { txt: "How Many Get Shots?", doneAt: null },
                { txt: "Alot", doneAt: 187111111 },
                { txt: "In The Hood", doneAt: null },
                { txt: "They All Say Like", doneAt: 187111111 },
                { txt: "50 You Hot", doneAt: 187111111 },
            ]
        },
        style: {
            backgroundColor: "#d7c6c6",
            color:"#a169ce"
        }
    },
    {
        id: 104,
        type: "note-video",
        isPinned: false,
        info: {
            title: "GreenAps New Realse",
            url:"https://www.youtube.com/embed/C5zSsJ5CU54",
        },
        style: {
            backgroundColor: "#9b8af0",
            color:"f121212"
        }
    },
    {
        id: 105,
        type: "note-img",
        isPinned: true,
        info: {
            title: "Me vs Sprint 3",
            url:"https://i.makeagif.com/media/7-12-2017/g06Fx7.gif",
        },
        style: {
            backgroundColor: "#926868",
            color:"#d5becb"
        }
    }
];