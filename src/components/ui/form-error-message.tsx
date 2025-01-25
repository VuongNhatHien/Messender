export default function FormErrorMessage({
    errors,
}: {
    errors: string[] | undefined;
}) {
    return (
        <div>
            <ul>{errors?.map((error) => <li key={error} className="text-destructive">- {error}</li>)}</ul>
        </div>
    );
}
