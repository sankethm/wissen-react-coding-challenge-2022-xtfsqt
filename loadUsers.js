import React, { useEffect } from 'react';
import { DataGrid } from 'react-data-grid';

export const LoadUsers = () => {
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
  ];
  const rows = [
    { key: 0, name: 'example' },
    { key: 1, name: 'demo' },
  ];
  useEffect(() => {
    fetch('https://reqres.in/api/unknown', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(localStorage.getItem('token'));
  }, []);
};
