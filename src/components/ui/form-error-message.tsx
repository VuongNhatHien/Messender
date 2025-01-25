export default function FormErrorMessage({
    errors,
}: {
    errors: string[] | undefined;
}) {
    return (
        <p className="text-destructive mt-2">{errors?.[0]}</p>
    );
}
