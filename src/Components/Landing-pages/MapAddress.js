import React from 'react';
import {Grid,Typography} from '@material-ui/core'
import Map from './Map';
function MapAddress(props) {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"  className="map-sec">
                <Grid className='map-left' container direction="row" justifyContent="center" alignItems="center"  xs={12} sm={12} lg={6} md={6} xl={6}> 
                   <Map/>
                </Grid>
                <Grid className='map-right' container direction="row" justifyContent="center" alignItems="center" xs={12} sm={12} lg={6} md={6} xl={6}> 
                    <noscript>
                        &lt;img decoding="async"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/themes/quuicentro/assets/img/logo.png"
                        alt="logo" className="img-fluid logo"&gt;
                    </noscript>
                    <img
                        decoding="async"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/themes/quuicentro/assets/img/logo.png"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/themes/quuicentro/assets/img/logo.png"
                        alt="logo"
                        className="img-fluid logo lazyloaded"
                    />
                    <Grid xs={12} sm={12} lg={12} md={12} xl={12} container direction="row" justifyContent="center" alignItems="center">
                        <div className="address">
                            <h4>UBICACIÓN</h4>
                            <p>
                                Avenida Naciones Unidas entre Avenida 6 de Dicie, bre y Avenida De
                                Los Shyris. Quito, Ecuador
                            </p>
                            <p>
                                <b>Phone Number</b> : 022464526
                            </p>
                            <p>
                                <b>Email</b> : info@quicentro.com
                            </p>
                        </div>
                    </Grid>
                    <Typography variant="h5">Contact on:</Typography>
                    <a href="https://www.facebook.com/QuicentroShopping" className="whatsapp">
                        <noscript>
                            &lt;img decoding="async"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/themes/quuicentro/assets/img/fb.png"
                            alt="facebook" className="img-fluid"&gt;
                        </noscript>
                        <img
                            decoding="async"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/themes/quuicentro/assets/img/fb.png"
                            data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/themes/quuicentro/assets/img/fb.png"
                            alt="facebook"
                            className="img-fluid lazyloaded"
                        />
                    </a>
                </Grid>
        </Grid>

    );
}

export default MapAddress;