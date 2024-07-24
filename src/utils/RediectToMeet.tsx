import { useEffect } from 'react';

export default function RedirectToMeet() {
  useEffect(() => {
    window.location.href = "https://teams.microsoft.com/l/meetup-join/19:meeting_OWM5YjlhZDgtZTc2Yi00MGZjLTk1YjctNjUyNTljY2MxZmQ1@thread.v2/0?context=%7B%22Tid%22:%22c4df842b-a6e1-4cf5-ace6-02319188d94a%22,%22Oid%22:%22e3a78955-6697-4ac7-9a15-43f71c30a6ec%22%7D"
  },[])
  return null;
}
