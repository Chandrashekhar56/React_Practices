import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

function RenderTreeApp() {
    return (
        <>
            <FancyText title="jai shree ram" text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2024} />
            </InspirationGenerator>
            {/* <InspirationGenerator/>
            <Copyright year={2024}/> */}
        </>
    );
}
export default  RenderTreeApp