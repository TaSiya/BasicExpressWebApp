module.exports = function CategoryService(pool){
    async function all(){
        let categories = await pool.query('SELECT id, description from categories');
        return categories.rows;
    }
    async function add(category){
        let data = [
            category.description
        ];
        return pool.query('insert into categories (description)  values ($1)', data);
    }

    async function get(id){
        return pool.query('SELECT id, description FROM categories WHERE id = $1', [id]);
    }

    async function update(category){
        return pool.query('UPDATE categories SET description = $1 WHERE id = $2', [category.description, category.id]);
    }

    async function deleteOne (id){
        return pool.query('DELETE FROM categories WHERE id = $1', [id]);
    }

    return {
        add,
        all,
        delete : deleteOne,
        get,
        update
    }
}