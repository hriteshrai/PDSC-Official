import { useEffect } from 'react';

export default function RedirectToMeet() {
  useEffect(() => {
    window.location.href = "https://meet.google.com/urs-fhrd-ywz"
  },[])
  return null;
}
