const yargs = require('yargs')
const students = require('./grades')

yargs.command({
    command: 'add',
    describe: 'Add Student Details',
    builder: {
        id: {
            describe: 'This is student id',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'This is student name',
            demandOption: true,
            type: 'string'
        },
        degrees: {
            describe: 'This is student degrees',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'Student level comment',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (x) => {
        students.addStudent(x.id, x.name, x.degrees, x.comment)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete Student Details',
    builder: {
        id: {
            describe: 'This is student id',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'This is student name',
            demandOption: false,
            type: 'string'
        },
        degrees: {
            describe: 'This is student degrees',
            demandOption: false,
            type: 'array'
        },
        comment: {
            describe: 'Student level comment',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (x) => {
        students.removeStudent(x.id)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read Student Details',
    builder: {
        id: {
            describe: 'This is student id',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'This is student name',
            demandOption: false,
            type: 'string'
        },
        degrees: {
            describe: 'This is student degrees',
            demandOption: false,
            type: 'array'
        },
        comment: {
            describe: 'Student level comment',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (x) => {
        students.readStudent(x.id)
    }
})

yargs.command({
    command: 'list',
    describe: 'List Student Details',
    handler: () => {
        students.listStudent()
    }
})

yargs.parse()