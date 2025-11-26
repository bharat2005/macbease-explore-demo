import React, { useState } from 'react';
import {View, Image, Text} from 'react-native';
 import {Buffer} from 'buffer';

const bucket =  () => "onlytemptestingmacbease"
const URLa = () => "https://d33g7orf12ceoo.cloudfront.net/"



export default function SmartImage2({
  imgKey,
  width,
  height,
  contain,
  ...imageProps
}) {
  let w = imageProps.style.width;
  let h;
  if (imageProps.style.height) {
    h = imageProps.style.height;
  }
  const uri = React.useMemo(() => {
    const imageRequest = JSON.stringify({
      bucket:bucket(),
      key: imgKey,
      edits: {
        resize: {
          width: width,
          height: height,
          fit: contain ? 'contain' : 'cover',
        },
      },
    });
    const encoded = Buffer.from(imageRequest).toString('base64');
    const cacheBuster = new Date().getTime();
    return `${URLa() + encoded}?t=${cacheBuster}`
  }, [imgKey, width, height]);

  return (
    <View>
      <Image
       source={typeof uri === 'string' ? { uri } : uri} 
      // source={{uri:"https://images.imyfone.com/filme/assets/article/converting-image-to-url.jpeg"}}
       height={h} width={w} {...imageProps} /> 
    </View>
  );
}