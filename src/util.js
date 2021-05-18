import { useEffect } from "react";

export const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "y";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "m";
  }

  interval = seconds / 604800;
  if (interval > 1) {
    return Math.floor(interval) + "w";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "d";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "h";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "m";
  }
  return Math.floor(seconds) + "s";
};

const useOutsideAlerter = (ref, func) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        func(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, func]);
};

export const DropWrapper = (props) => {
  useOutsideAlerter(props.dropref, props.func);
  return <div ref={props.dropref}> {props.children} </div>;
};
