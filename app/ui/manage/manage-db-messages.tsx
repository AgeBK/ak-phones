import { ManageDBMessagesProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/Form.module.css";

// displays database errors add/edit/delete
export default function ManageDBMessages({
  errorMessages,
}: ManageDBMessagesProps) {
  const isDemoMode = errorMessages.message?.startsWith("Demo mode:") ?? false;

  return (
    <div
      aria-live="polite"
      className={isDemoMode ? styles.demo : styles.error}
      role="status"
    >
      <div className={styles.message}>{errorMessages?.message}</div>
      <ul>
        {errorMessages.errors &&
          Object.entries(errorMessages.errors).map(([key, val], i) => (
            <li key={i} className={styles.messageList}>
              <b>{key}</b> - {val?.toString()}
            </li>
          ))}
      </ul>
    </div>
  );
}
