import http from '../http-common'

class UserData{
    getAll(page = 0) {
        return http.get(`?page=${page}`);
      }
    
    get(id) {
        return http.get(`/id/=${id}`);
      }
    
    find(query, by = "name", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
      } 
    
    createUser(data) {
        return http.post("/user-new", data);
    }
    
    updateUser(data) {
        return http.put("/user-edit", data);
    }
    
    deleteUser(id, userId) {
        return http.delete(`/user-delete?id=${id}`, {data:{user_id: userId}});
    }
    
    getUsers(id) {
        return http.get(`/users`);
    }
}

export default new UserData();