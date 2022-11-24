const clienteDao=require("./cliente-dao");

describe("Conjunto de testes app",()=>{
    it('Deve retornar true ao tentar gravarDadoss', async() => {
        const res = await clienteDao.gravarDados({
            codigo: '123123',
            nome: 'dados.descricao',
            endereco: '1',
        });
        expect(res).toBeTruthy();
    });

    it('Deve retornar true ao tentar gravarDadoss', async() => {
        const res = await clienteDao.gravarDados({
            endereco: '1',
        });
        expect(res).toBeFalsy();
    });

    it('Deve retornar true ao tentar gravarDadoss', async() => {
        const res = await clienteDao.buscaTodosDados({});
        expect(res).toBeTruthy();
    })
});