import React from "react";
import { makeStyles } from "@material-ui/core";
import images from '../Header&Footer/Data/images';
import style from '../../Assest/Style/style.css';
import CustomSlider from '../Header&Footer/CustomSlider';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({

});

export const Banner = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
      <Grid  direction="row" justifyContent="flex-start" alignItems="flex-start" xs={12} sm={12} lg={12} md={12} xl={12}>
        <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      </Grid>
    </Grid>

  );
};