interface SvgProps {
    svg: string;
    top?: string;
}

function HomeSvg(svgProps: SvgProps) {
    const top = svgProps.top || 'mt-16';
    return (
        <div className={`sm:w-[160px] sm:h-[160px] md:w-[256px] md:h-[256px] w-[50px] h-[50px] ${top}`}
             style={{
                 backgroundImage: `url(${svgProps.svg})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 backgroundSize: 'contain',
             }}></div>
    )
}

export default HomeSvg;