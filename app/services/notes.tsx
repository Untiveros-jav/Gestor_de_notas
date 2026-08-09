const notes = [
    {
        id: 1,
        content: "next.js utilizes React Server Components",
        important: true
    },
    {
        id: 2,
        content: "next.js in built on top of React",
        important: true
    },
    {
        id: 3,
        content: "next.js supports both static and dunamic rendering",
        important: false
    },
]

let nexID = 4

export const getNotes = () => {
    return notes
}

export const addNote = (content: string, important: boolean) => {
    notes.push({
        id: nexID ++,
        content,
        important
    })
}