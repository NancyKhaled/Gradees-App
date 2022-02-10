const fs = require('fs')

// Add
// in terminal write => node app.js add --id=1 --name='ali' foo parse --degrees 10 --degrees 30 --degrees 20  --comment='A'
const addStudent = (id, name, degrees, comment) => {
    const students = loadData()
    const duplicateId = students.find((student) => {
        return student.id === id
    })

    // total all elements in the degrees array
    let total = degrees.reduce(function (a, b) {
        return a + b
    }, 0)

    if (!duplicateId) {
        students.push({
            id, // shorthand property
            name,
            degrees,
            total,
            comment
        })
        saveStudents(students)
        console.log('Saved Susccessfully')
    } else {
        console.log('Error duplicate student id')
    }
}

const loadData = () => {
    try {
        const data = fs.readFileSync('students.json').toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

const saveStudents = (students) => {
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json', saveData)
}

// Remove
// in terminal write => node app.js delete --id=1
const removeStudent = (id) => {
    const students = loadData()
    const studentsToKeep = students.filter((student) => {
        return student.id !== id
    })

    if (studentsToKeep.length !== students.length) {
        saveStudents(studentsToKeep)
        console.log('Removed Successfully')
    } else { 
        console.log('Student id is not found')
    }
}

// Read 
// in terminal write => node app.js read --id=2
const readStudent = (id) => {
    const students = loadData()
    const studentToRead = students.find((el) => {
        return el.id === id
    })
    
    if (studentToRead) {
        console.log(studentToRead)
    } else {
        console.log('Not Found')
    }
}

// list 
// in terminal write => node app.js list
const listStudent = () => {
    const students = loadData()
    students.forEach((el) => {
        console.log('student id: ' + el.id, '| student name: ' + el.name, '| total degrees: ' + el.total)
    })
}

module.exports = {
    addStudent,
    removeStudent,
    readStudent,
    listStudent
}