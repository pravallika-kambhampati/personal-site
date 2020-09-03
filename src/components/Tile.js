import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import styled, { keyframes } from 'styled-components';


const TilesAnime = keyframes`
0%   { 
      opacity: 0;
   }
50%  {
opacity: 0.5
}
100% {
opacity: 1
}

`
const TileWrap = styled.div`
  
  position: relative;
  animation-name: ${TilesAnime};
  animation-duration: 5s;

  
`

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: '50px',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '100%',
    height: '100%',
    marginLeft: '',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
    //   marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: '',
      top: 0,
      left: 0,
    //   width: '100%',
    //   height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },

  gridlayout: {
    marginBottom: "175px",
  }

}));

export const BlogCardDemo = React.memo(function BlogCard( props ) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();


  return (
    <TileWrap>
    <div className={styles.gridlayout}>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          props.imgsrc
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          heading={props.name}
          body={props.body}
        />
        <Button href={props.url} className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
  
       
    </div>
    </TileWrap>
  );
});

export default BlogCardDemo