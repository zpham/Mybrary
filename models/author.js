//const express = require('express')//
//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
const Book = require('./book')


const authorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
})

authorSchema.pre('deleteOne', { document: true, query: false}, function(next) {
    console.log('Removing 1 ')
    // Book.find({author: this.id}).then((err, books) => {
    //     console.log(this.id)
    //     console.log(books)
    //    // next()
    // })
    
    // try {
    //     n = Book.find({"author": this.id})
    //     console.log('--> ' + n)
    // } catch (err) {
    //     console.log(err)
    // }
    next()

    // Book.find({}).toArray(function(err, result) {
    //     console.log('Removing 2 ')
    // })

    // Book.find({author: this._id}, (err, books) => {
    //     if (err) {
    //         console.log('Removing 2 ')
    //         next(err)
    //     } else if (books.length > 0 ) {
    //         console.log('Removing 3 ')
    //         next(new Error('This author has books still'))
    //     } else {
    //         console.log('Removing 4 ')
    //         next()
    //     }
    // })
    // console.log('Removing 5 ')
})

module.exports = mongoose.model('Author', authorSchema)