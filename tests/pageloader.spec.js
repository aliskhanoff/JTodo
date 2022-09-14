//import { setupWorker, rest } from 'msw'


describe('Loading dynamic pages from server', () => { 
      
  // const server = setupWorker(rest.get('/api/pages', async (req, res, ctx) => {
  //   return res(
  //     ctx.json({"data":[{"id":1,"attributes":{"name":"Index","url":"/","title":"SSM Group BV","createdAt":"2022-09-03T19:33:12.515Z","updatedAt":"2022-09-03T19:37:51.216Z","locale":"en"}},{"id":2,"attributes":{"name":"About","url":"/about","title":"About SSM Group","createdAt":"2022-09-03T19:37:34.077Z","updatedAt":"2022-09-03T19:37:34.077Z","locale":"en"}},{"id":3,"attributes":{"name":"Contacts","url":"/contacts","title":"Contact information","createdAt":"2022-09-06T13:11:04.753Z","updatedAt":"2022-09-06T13:11:04.753Z","locale":"en"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}})
  //   )
  // }))

  beforeAll(() => {
    // server.start();
  })

  afterAll(() => {
    // server.stop();
  })

  test('should load pages from server dynamically', () => { 

  })


})