import should from 'should'
import axios from 'axios'
import Server from '../src/server.js'

describe('test works', () => {
  let server

  beforeEach(done => {
    server = new Server()
    server.listen()
    .then(() => done())
    .catch(done)
  })

  afterEach(done => {
    server.stop()
    .then(() => done())
    .catch(done)
  })

  it('should work', async () => {
    const res = await axios.get('http://localhost:8080')
    should.exist(res)
    res.status.should.equal(200)
  })
})
