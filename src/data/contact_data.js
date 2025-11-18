const contacts = [
    {
        id: 1,
        user_id: 1,
        name: 'Marcelo',
        profile_picture: 'https://media.istockphoto.com/id/1208175274/es/vector/icono-vectorial-de-avatar-elemento-simple-illustrationavatar-icono-vectorial-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=wxDf-xpKxb7uUvZ3YiCY6er6Lx__wE3gDaLqlpi0TKM=',
        last_connection: 'Hoy 17:00',
        is_connected: false,
        messages: [
            {
                id: 1,
                content: 'Hola',
                author_id: 1,
                author_name: "Marcelo",
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 2,
        user_id: 2,
        name: 'Marcos Juarez',
        profile_picture: 'https://media.istockphoto.com/id/1208175274/es/vector/icono-vectorial-de-avatar-elemento-simple-illustrationavatar-icono-vectorial-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=wxDf-xpKxb7uUvZ3YiCY6er6Lx__wE3gDaLqlpi0TKM=',
        last_connection: 'hoy 19:30',
        is_connected: false,
        messages: [
            {
                id: 2,
                content: 'Todo bien',
                author_id: 2,
                author_name: "Marcos",
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
    }
]

export default contacts