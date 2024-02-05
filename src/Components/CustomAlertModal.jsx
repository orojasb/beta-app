
import Swal from "sweetalert2";

export const questionModal = (title, text, confirmText, callbackConfirmed) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: confirmText,
  }).then((result) => {
    if (result.isConfirmed) {
      callbackConfirmed();
    }
  });
};
export const errorModal = (title, text) => {
    Swal.fire({
        icon: "error",
        title: title || "Oops...",
        text: text || "Something went wrong!",
      });
};
export const successModal = (title, text) => {
    Swal.fire({
        icon: "success",
        title: title || "Perfect...",
        text: text || "Everything was good!",
      });
};
