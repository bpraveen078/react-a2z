import fetch from "isomorphic-fetch";

// let Task_Url = "https://react-assessment-api.herokuapp.com/api/drone";
let Task_Url = "https://practiceapi.devmountain.com/api/tasks";

// const getAllTasks = () => {
//   debugger
//   return fetch(Task_Url).then(handleResponse);
// };
const getAllTasks = () => {
   
  return fetch(Task_Url)
    .then(res => {
       
      return res.json();
    })
    .catch(err => {
       
      return err;
    });
};

const createTask = model => {
  let req = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  };
  return fetch(Task_Url, req)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return err;
    });
};

const deleteTask = id => {
  let req = {
    method: "Delete"
  };
  return fetch(`${Task_Url}/${id}`, req)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return err;
    });
};
const completeTask = id => {
  let req = {
    method: "Put"
  };
  return fetch(`${Task_Url}/${id}`, req)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return err;
    });
};
const updateTask = (model, id) => {
  let req = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  };
  let url = `${Task_Url}/${id}`;
  return fetch(url, req)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return err;
    });
};

function handleResponse(response) {
   
  return response.text().then(text => {
     
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.Result) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export { getAllTasks, createTask, deleteTask, completeTask, updateTask };
