import { UNAVAILABLE_PAGE_DESCRIPTION } from "@/constants"

export default function Profile() {
  return (
    <div className="sublayout">
      <div className="sublayout__empty_page">
        <div className="text__error_message">
          {UNAVAILABLE_PAGE_DESCRIPTION}
        </div>
      </div>
    </div>
  )
}