import './smart-book-image.scss';



export const SmartBookImage = ({imageUrl, className}) => {
    let content = null;
    

    if( !imageUrl ) content = <div className='image-bypass'>
        <svg width="49" height="48" viewBox="0 0 49 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.75 14.4474H17.625L9.75 7.5L8 26.6053C8 31.8158 11.5 40.5 23.75 40.5C36 40.5 39.5 31.8158 39.5 26.6053C39.5 24.5211 38.3333 13 37.75 7.5L30.75 14.4474Z" stroke="#363636" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M15.5 27H3.5" stroke="#363636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M45.5 27H33.5" stroke="#363636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 34.5H5" stroke="#363636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 34.5H32" stroke="#363636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.75 27V30C24.75 31 27.2 32.4 29 30" stroke="#363636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.75 30C22.75 31 20.3 32.4 18.5 30" stroke="#363636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>;

    if( imageUrl ) content = <img src={`https://strapi.cleverland.by${imageUrl}`} alt='book' />;

    return <div className={`smart-book-image ${className}`}>{content}</div>;
};