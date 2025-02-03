import React from 'react';
import RestaurantItem from './RestaurantItem';
import PropTypes from 'prop-types';
import Grid from './styled/Grid';

const RestaurantsList = ({ restaurants }) => {
  return (
    <Grid gap="1rem">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </Grid>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default RestaurantsList;