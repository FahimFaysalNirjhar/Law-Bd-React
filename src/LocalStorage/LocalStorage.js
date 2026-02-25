import Swal from "sweetalert2";
const getStoredID = () => {
  const storedId = localStorage.getItem("lawyers");
  if (storedId) {
    return JSON.parse(storedId);
  }
  return [];
};

const addToLocalStorage = (id) => {
  const storedId = getStoredID();
  if (storedId.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have already booked an appointment with this lawyer.",
    });
    return false;
  } else {
    storedId.push(id);
    localStorage.setItem("lawyers", JSON.stringify(storedId));
    return true;
  }
};

const removeToLocal = (id) => {
  const storedId = getStoredID();
  const remainingId = storedId.filter((storedId) => storedId !== id);
  localStorage.setItem("lawyers", JSON.stringify(remainingId));
};

export { addToLocalStorage, getStoredID, removeToLocal };
