
const produtoDao=require("./produto-dao");

describe("Conjunto de testes app",()=>{
    it('Deve retornar true ao tentar gravarDadoss', async() => {
        const res = await produtoDao.gravarDados({
            id: 88895122,
            codigo: 98123123,
            descricao: 'dados.descricao',
            unidademedida: '1',
            precoun: 5,
            estoque: 5,
        });
        expect(res).toBeTruthy();
    });

    it('Deve retornar false ao tentar gravarDadoss', async() => {
        const res = await produtoDao.gravarDados({
            id: '44',
            codigo: '98123123',
            descricao: 'dados.descricao',
            unidademedida: '1',
            precoun: '5',
            estoque: '5',
        });
        expect(res).toBeFalsy();
    });

    it('Deve retornar true ao tentar gravarDadoss', async() => {
        const res = await produtoDao.buscaTodosDados({});
        expect(res).toBeTruthy();
    })
});