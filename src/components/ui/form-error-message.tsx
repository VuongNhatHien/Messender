export default function FormErrorMessage({
    error,
}: {
    error: string | undefined;
}) {
    return (
        <p className="text-destructive mt-2 text-xs">{error}</p>
    );
}
