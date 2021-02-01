const Database = require('./db');

Database.then(async db => {
    //inserindo dados na tabela
    await db.run(db {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98989897898",
        images: [
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultando dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
// Database.then(async db => {
//     // inserir dados
//     await db.run(`
//         INSERT INTO orphanages (
//             lat,
//             lng,
//             name,
//             whatsapp,
//             images,
//             instructions,
//             opening_hours,
//             open_on_weekends
//         ) VALUES (
//             "-23.9605303",
//             "-46.3711739",
//             "Lar de Assistencia ao Menor 2",
//             "O LAM é uma entidade sem fins lucrativos, reconhecida como de Utilidade Pública nos âmbitos Municipal (1966), Estadual (1972) e Federal (1985), situada no Município de São Vicente.",
//             "http://localhost:3234/images/home.jpg",
//             "venha como se sentir a vontade e traga muito amor e atenção para dar.",
//             "Horário de visita Fechado no momento.",
//             "0"
//         );
//     `)
//     //consultar dados
//     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
//     console.log(selectedOrphanages)
 })