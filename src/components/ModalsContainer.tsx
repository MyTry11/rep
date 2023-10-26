import React from "react";
import { ModalCallMe } from "./ModalCallMe";
import { ModalLinks } from "./ModalLinks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setModalActive } from "../store/modalSlice";
import { setModalLinksActive } from "../store/modalSliceLinks";

export const ModalsContainer = () => {
  const dispatch = useAppDispatch();
  const modalisActive = useAppSelector((state) => state.modalSlice.value);
  const modalisActiveLinks = useAppSelector(
    (state) => state.modalSliceLinks.value
  );

  const onClose = () => {
    dispatch(setModalActive(false));
    document.body.classList.remove("modal-active");
  };
  const onCloseLinks = () => {
    dispatch(setModalLinksActive(false));
    document.body.classList.remove("modal-active");
  };
  return (
    <div className="">
      {modalisActive && <ModalCallMe onClose={onClose}></ModalCallMe>}
      {modalisActiveLinks && <ModalLinks onClose={onCloseLinks}></ModalLinks>}
    </div>
  );
};
