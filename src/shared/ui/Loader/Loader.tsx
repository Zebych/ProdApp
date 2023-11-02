import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div
        className={classNames('loadingio-spinner-ellipsis-1p9suq1hhhg', {}, [
            className,
        ])}
    >
        <div className="ldio-gqox54zgk8">
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
