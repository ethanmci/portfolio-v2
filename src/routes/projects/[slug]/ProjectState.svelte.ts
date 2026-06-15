import { urlFor } from "$lib/sanity";

export class ProjectState {
	#expandedImage: string | undefined = $state(undefined);
  #projectModal: HTMLDialogElement | undefined = $state(undefined);

  get expandedImage(): string | undefined {
    return this.#expandedImage;
  }

  set projectModal(modal: HTMLDialogElement | undefined) {
    if (!modal) return;
    this.#projectModal = modal;
  }

  set expandedImage(imageUrl: string) {
    if (this.#projectModal === undefined) return;
    this.#expandedImage = urlFor(imageUrl).format("webp").quality(100).url();
    this.#projectModal.showModal();
  }

  closeImage = () => {
    if(!this.#projectModal?.open) return
    this.#projectModal?.close()
  }
}
