import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

function NoteCard({ note }) {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-neutral-800 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="card-body">
        <h3 className="card-title text-balance">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60 ">
            {note.createdAt}
          </span>
          <div className="flex items-start gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error  ">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
