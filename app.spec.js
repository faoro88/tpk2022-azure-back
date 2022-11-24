
const app=require("./app");
const clienteDao=require("./database/dao/cliente-dao");
const produtoDao=require("./database/dao/produto-dao");
const request=require("supertest");




describe("Conjunto de testes app",()=>{

    it("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });

    it("Ao salvar um cliente o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);

      
        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({codigo:"",
                    nome:"236",
                    endereco:"7889"});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });
    
    it("Ao tentar salvar um cliente e der um erro o endpoint deve retornar  NOk e 401",async()=>{
    const databaseSpy = jest.spyOn(clienteDao, 'gravarDados');
    databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false
    
      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });
    it("Ao tentar um get no endpoint produtos/listar", async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'buscaTodosDados' );
        databaseSpy.mockReturnValue(false);

        const res=await request(app).get("/produtos/listar")
        expect(res).toBeTruthy();
    });

    it("Ao tentar um get no endpoint /clientes/listar", async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'buscaTodosDados' );
        databaseSpy.mockReturnValue(false);

        const res=await request(app).get("/clientes/listar")
        expect(res).toBeTruthy();
    });

    it("Ao tentar um get no endpoint /clientes/listar(id)", async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'buscaDados' );
        databaseSpy.mockReturnValue(false);

        const res=await request(app).get("/clientes/listar/:key")
        expect(res).toBeTruthy();
    });

    it("Ao tentar salvar um produto e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false
        const esperado="NOk";
        const res=await request(app)
                    .post("/produto")
                    .send({});
        expect(res.status).toBe(401);
    });

    it("Ao tentar salvar um produto e der um sucesso o endpoint deve retornar  Ok e 201",async()=>{
        const databaseSpy = jest.spyOn(produtoDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);//gravarDados Sempre Vai Retornar false
        const esperado="Ok";
        const res=await request(app)
                    .post("/produto")
                    .send({
                        id: "123",
                        codigo: "123",
                        descricao: "asdasd",
                        unidademedida: "1",
                        precoun: "1",
                        estoque: "1"
                        
                    });
        expect(res.status).toBe(201);
    });



})