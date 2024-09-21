import { Spinner } from '@nextui-org/spinner';

export default function Loading() {
    return (
        <div className="flex size-full">
            <Spinner className="m-auto" color="default"/>
        </div>
    );
}
