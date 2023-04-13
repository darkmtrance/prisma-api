const { Router } = require("express");
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const router = Router();

/**
 * crear un registro
 * @openapi
 * /posts:
 *   post:
 *     tags:
 *       - posts
 *     description: Este endpoint es para crear un post
 *     requestBody:
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: "#/components/schemas/post"
 *     responses:
 *       200:
 *         description: Retorna el objeto insertado en la coleccion
 *     security:
 *       - bearerAuth: []
 */
router.post('/',async(req,res) =>{
    const {title,content} =  req.body
    const result = await prisma.post.create({
             data :{
                 title,
                 content
             }
        })
    res.json(result)
})

/**
 * mostrar todos los registros
 * @openapi
 * /posts:
 *   get:
 *     tags:
 *       - posts
 *     description: Este endpoint es para listar los posts
 *     responses:
 *       200:
 *         description: Retorna la lista de posts
 *     security:
 *       - bearerAuth: []
 */
router.get('/',async(req,res) =>{
    const posts = await prisma.post.findMany();
    res.json(posts);
})

/**
 * actualizar un registro
 * @openapi
 * /posts/{id}:
 *   put:
 *     tags:
 *       - posts
 *     description: Este endpoint es para actualizar un post
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del post
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: "#/components/schemas/post"
 *     responses:
 *       200:
 *         description: Retorna el objeto actualizado en la coleccion
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id',async(req,res)=>{
    const {id} = req.params
    const {title, content} = req.body
    const result = await prisma.post.update({
        where:{
            id: Number(id)
        },
        data :{
            title,
            content
        }
   })
res.json(result)

})

/**
 * eliminar un registro
 * @openapi
 * /posts/{id}:
 *   delete:
 *     tags:
 *       - posts
 *     description: Este endpoint es para eliminar un post
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del post
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Retorna respuesta de eliminado
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id',async(req,res) => {
    const {id} = req.params
    await prisma.post.delete({
        where:{
            id: Number(id)
        }
    })
    res.json('eliminado')

})

module.exports = router;