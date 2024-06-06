import React,{useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
// Define custom styles using `styled` from `@mui/system`
const BlogCard = styled(Card)(({ theme }) => ({
  width: '100%',
  margin: '0.5rem',
  background: 'linear-gradient(to right, #9d50bb, #e53935)',
  boxShadow: '0 4px 6px -1px rgba(236, 72, 153, 0.5)',
  borderRadius: '0.5rem',
  transform: 'scale(1)',
  transition: 'transform 0.5s',
  textAlign:'center',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Title = styled(Typography)({
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: '1rem 0',
  color: 'white',
});

const Content = styled(Typography)({
  color: 'white',
  lineHeight: '1.5',
});
export default function AlignItemsList(props) {
  const [list,setList]=useState([]);
  async function fetchList(){
      try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const listData=await response.json();
        setList(listData);
        console.log(listData);
      }
      catch(error){
        console.log(error);
        throw new Error(error);
      }

  }
  //fetch list from api when component mount by using useEffect
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <List>
    {list && list.length > 0 && list.map((item, index) => (
      item.title.includes(props.searchValue) ?
      <ListItem key={index}>
        <BlogCard>
          <CardContent>
            <Title>{item.title}</Title>
            <Content>{item.body}</Content>
          </CardContent>
        </BlogCard>
      </ListItem>:null
    ))}
  </List>
  );
}
