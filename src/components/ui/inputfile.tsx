import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InputFile() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">File</Label>
            <Input
                id="file"
                type="file"
                className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
        </div>
    );
}
