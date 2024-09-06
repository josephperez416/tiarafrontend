import React, { useContext, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ServiceDetailsContext } from './ServiceDetailsProvider';

function ProductItem({ name, price, count, onIncrement, onDecrement }) {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
      borderBottom={'1px solid #ccc'}
    >
      <Box>
        <Typography fontSize={'22px'}>{name}</Typography>
        <Typography fontSize={'18px'} color='text.secondary'>${price}</Typography>
      </Box>
      <Box display="flex" alignItems="center" margin={1} border={2.5} borderColor={'#932F6D'} borderRadius={3}>
        <IconButton onClick={onDecrement} disabled={count === 0}>
          <RemoveIcon />
        </IconButton>
        <Typography variant='body1' mx={2} fontWeight={'bold'}>{count}</Typography>
        <IconButton onClick={onIncrement}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

function ProductList({ products }) {

  const {setTotalPrice} = useContext(ServiceDetailsContext);

  const [counts, setCounts] = useState(products.map(() => 0));

  const handleIncrement = (index) => {
    setCounts(prevCounts => prevCounts.map((count, i) => i === index ? count + 1 : count));
  };

  const handleDecrement = (index) => {
    setCounts(prevCounts => prevCounts.map((count, i) => i === index && count > 0 ? count - 1 : count));
  };

  const totalCount = counts.reduce((total, count) => total + count, 0);
  const sumPrice = counts.reduce((total, count, index) => total + (count * products[index].price), 0);

  setTotalPrice(sumPrice);


  return (
    <Box borderRadius={4} p={3} bgcolor="white" boxShadow={3} width='85%' marginX={'auto'}>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          count={counts[index]}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
        />
      ))}
      <Box mt={2}>
        <Typography variant="h6">Total Count: {totalCount}</Typography>
      </Box>
    </Box>
  );
}

export default ProductList;
