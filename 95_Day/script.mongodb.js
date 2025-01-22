use("CrudDb");
console.log(db)

// db.createCollection("subjects")

// db.subjects.insertOne({
//     "name": "Maths",
//     price:200,
//     "description": "Maths is a subject that deals with numbers and their operations",
//     teacher: "Mr. Smith"
// })
// db.subjects.insertMany([
    
//         {
//             "name": "Science",
//             "price": 250,
//             "description": "Science explores the physical and natural world through observation and experimentation.",
//             "teacher": "Ms. Johnson"
//         },
//         {
//             "name": "History",
//             "price": 180,
//             "description": "History is the study of past events, particularly in human affairs.",
//             "teacher": "Mr. Brown"
//         },
//         {
//             "name": "English",
//             "price": 220,
//             "description": "English focuses on language, literature, and effective communication skills.",
//             "teacher": "Mrs. Taylor"
//         },
//         {
//             "name": "Physics",
//             "price": 300,
//             "description": "Physics is the branch of science concerned with the nature and properties of matter and energy.",
//             "teacher": "Dr. Wilson"
//         },
//         {
//             "name": "Art",
//             "price": 150,
//             "description": "Art is a form of creative expression through various mediums like painting and sculpture.",
//             "teacher": "Ms. Davis"
//         }
//     ]
    
// )
// db.subjects.updateOne({price:200}, {$set:{price:170}})
// let a = db.subjects.find({price:200})
// console.log(a);
// db.subjects.updateMany({price:150}, {$set:{price:2000}})

db.subjects.deleteMany({
    name: "Maths"
})