// src/@types/declarations.d.ts

declare module 'cloudinary-react' {
    import * as React from 'react';
  
    interface CloudinaryContextProps {
      cloudName: string;
    }
  
    export class CloudinaryContext extends React.Component<CloudinaryContextProps, any> {}
  
    interface ImageProps {
      publicId: string;
      children?: React.ReactNode;
    }
  
    export class Image extends React.Component<ImageProps, any> {}
  
    interface TransformationProps {
      width?: number;
      crop?: string;
    }
  
    export class Transformation extends React.Component<TransformationProps, any> {}
  }
  
  declare module 'cloudinary-core' {
    export class Cloudinary {
      constructor(config: { cloud_name: string });
  
      url(publicId: string, options?: any): string;
    }
  }
  