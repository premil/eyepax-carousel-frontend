const withHeaderStyling = (BaseComponent) => (props) => (
    <BaseComponent {...props}  style={{ fontWeight: 900, color: 'black' }}/>
);

const withGeneralStyling = (BaseComponent) => (props) => (
    <BaseComponent {...props} className='general' />
);

export{
    withHeaderStyling,
    withGeneralStyling
}