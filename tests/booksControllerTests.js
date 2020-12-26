const should = require('should')
const sinon = require('sinon')
const booksController = require('../controllers/booksController')

describe('Book Controller Test:', () => {
  describe('Post', () => {
    it('should not allow an empty title on post', () => {
      const Book = function (book) { this.save = () => { } }

      const req = {
        body: {
          author: 'Jon'
        }
      }

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      }

      const controller = booksController(Book)
      controller.post(req, res)

      res.status.calledWith(400).should.equal(true, `Bad status ${res.status.args[0][0]}`)
      res.send.calledWith('Title is required').should.equal(true)
    })
  })
})
