
const request = require('supertest')
const app = require('../src/app')
let server = request(app);

describe("GET /posts", () => {
    test("should respond with a 200 status code", async() => {
        const response = await server.get("/posts").send();
        expect(response.statusCode).toBe(200);
    });
});

describe("POST /posts", () => {
    test("should respond with a 200 status code", async() => {
        const post = {
            title: 'post prueba',
            content: 'content prueba'
        }
        
        
        const response = await server.post("/posts").send(post).expect('Content-Type',/json/);
        expect(response.statusCode).toBe(200);
    });
});

describe("PUT /posts/:id", () => {
    test("debería actualizar la información del usuario y devolver la información actualizada del usuario en formato JSON", async() => {
        const post = {
            title: 'post prueba',
            content: 'content prueba'
        }

        const respuestaCrear = await server.post('/posts').send(post).expect('Content-Type', /json/).expect(200);
      
        const postUpdate = {
            title: 'post prueba actualizada',
            content: 'content prueba actualizada'
        }

        const respuestaActualizar = await server.put(`/posts/${respuestaCrear.body.id}`)
        .send(postUpdate)
        .expect('Content-Type', /json/)
        .expect(200);
        
        expect(respuestaActualizar.body).toHaveProperty('id', respuestaCrear.body.id);
        expect(respuestaActualizar.body).toHaveProperty('title', postUpdate.title);
        expect(respuestaActualizar.body).toHaveProperty('content', postUpdate.content);
        
    });
});

describe('DELETE /posts/:id', () => {
    it('debería eliminar el usuario y devolver un objeto con un mensaje de éxito en formato JSON', async () => {
      const post = {
        title: 'post prueba',
        content: 'content prueba'
      };
      
      const respuestaCrear = await server
        .post('/posts')
        .send(post)
        .expect('Content-Type', /json/)
        .expect(200);
        
      const respuestaEliminar = await server
        .delete(`/posts/${respuestaCrear.body.id}`)
        .expect('Content-Type', /json/)
        .expect(200);
        
      expect(respuestaEliminar.body).toBe('eliminado');
    });
  });




// prueba Jest
test('sumar dos números', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(1+2).toBe(3);
});
