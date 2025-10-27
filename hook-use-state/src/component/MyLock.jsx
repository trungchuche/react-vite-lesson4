import useClock from './hook/useClock';

export default function MyLock() {
    // goi custom hook de lay time va ampm
    const { time, ampm } = useClock();

    return (
        <div id='Clock-style'>
            {time}
            <span> {ampm}</span>
        </div>
    );
}