import Swal from "sweetalert2";
const getStoredID = () => {
  const storedId = localStorage.getItem("doctors");
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
      text: "You have already booked an appointment with this doctor.",
    });
    return false;
  } else {
    storedId.push(id);
    localStorage.setItem("doctors", JSON.stringify(storedId));
    return true;
  }
};

export { addToLocalStorage, getStoredID };
