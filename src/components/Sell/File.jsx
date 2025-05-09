export default function File({ setFile }) {
  return (
    <div className="mb-6 flex gap-3">
      <label className="min-w-11 text-gray-700 font-normal mb-1">사진</label>
      <input
        type="file"
        accept="image/*"
        className="w-full"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}
